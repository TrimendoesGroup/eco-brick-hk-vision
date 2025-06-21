
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Organization {
  id: string;
  name: { en: string; zh: string };
  logo_url: string;
  organization_type: string;
  contribution: { en: string; zh: string };
  website_url?: string;
}

const Organizations = () => {
  const { t, i18n } = useTranslation();

  const { data: organizations = [] } = useQuery({
    queryKey: ['organizations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      return data.map(org => ({
        ...org,
        name: org.name as { en: string; zh: string },
        contribution: org.contribution as { en: string; zh: string }
      })) as Organization[];
    }
  });

  const hostingOrgs = organizations.filter(org => org.organization_type === 'hosting');
  const supportingOrgs = organizations.filter(org => org.organization_type === 'supporting');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
        </div>

        {/* Hosting Organizations */}
        {hostingOrgs.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Hosting Organizations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostingOrgs.map((org) => (
                <div key={org.id} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={org.logo_url}
                      alt={org.name[i18n.language as keyof typeof org.name]}
                      className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {org.name[i18n.language as keyof typeof org.name]}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {org.contribution[i18n.language as keyof typeof org.contribution]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Supporting Organizations */}
        {supportingOrgs.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Supporting Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {supportingOrgs.map((org) => (
                <div key={org.id} className="text-center group">
                  <div className="mb-3 flex justify-center">
                    <img 
                      src={org.logo_url}
                      alt={org.name[i18n.language as keyof typeof org.name]}
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    {org.name[i18n.language as keyof typeof org.name]}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {org.contribution[i18n.language as keyof typeof org.contribution]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Organizations;
