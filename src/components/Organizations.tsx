
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Organization {
  id: string;
  name: { en: string; zh: string };
  logo_url: string;
  contribution: { en: string; zh: string };
  organization_type: string;
  website_url?: string;
}

const Organizations = () => {
  const { t, i18n } = useTranslation();

  const { data: organizations = [], isLoading } = useQuery({
    queryKey: ['organizations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) {
        console.error('Error fetching organizations:', error);
        throw error;
      }
      
      console.log('Fetched organizations:', data);
      
      return data.map(org => ({
        ...org,
        name: org.name as { en: string; zh: string },
        contribution: org.contribution as { en: string; zh: string }
      })) as Organization[];
    }
  });

  const partners = organizations.filter(org => org.organization_type === 'partner');
  const supporters = organizations.filter(org => org.organization_type === 'supporter');

  const renderOrganizationGrid = (orgs: Organization[]) => (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
      {orgs.map((org) => (
        <div
          key={org.id}
          className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white text-center group hover:-translate-y-2"
        >
          <div className="mb-4">
            <img
              src={org.logo_url}
              alt={org.name[i18n.language as keyof typeof org.name]}
              className="h-16 w-16 mx-auto object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {org.name[i18n.language as keyof typeof org.name]}
          </h3>
          <p className="text-sm text-gray-600">
            {org.contribution[i18n.language as keyof typeof org.contribution]}
          </p>
        </div>
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-lg text-gray-600">Loading organizations...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('organizations.title', 'Our Partners & Supporters')}
          </h2>
        </div>

        {/* Partners Section */}
        {partners.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('organizations.partners', 'Our Partners')}
            </h3>
            {renderOrganizationGrid(partners)}
          </div>
        )}

        {/* Supporters Section */}
        {supporters.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('organizations.supporters', 'Our Supporters')}
            </h3>
            {renderOrganizationGrid(supporters)}
          </div>
        )}

        {organizations.length === 0 && (
          <div className="text-center">
            <p className="text-gray-600">No organizations data available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Organizations;
