
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";

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
      return data as Organization[];
    }
  });

  const hostingOrgs = organizations.filter(org => org.organization_type === 'hosting');
  const supportingOrgs = organizations.filter(org => org.organization_type === 'supporting');

  const OrganizationSection = ({ title, orgs }: { title: string; orgs: Organization[] }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orgs.map((org) => (
          <Card key={org.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <img 
                  src={org.logo_url}
                  alt={org.name[i18n.language as keyof typeof org.name]}
                  className="w-20 h-20 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {org.name[i18n.language as keyof typeof org.name]}
              </h4>
              <p className="text-gray-600 text-sm">
                {org.contribution[i18n.language as keyof typeof org.contribution]}
              </p>
              {org.website_url && (
                <a 
                  href={org.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm mt-2 inline-block"
                >
                  Visit Website
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
        </div>

        {hostingOrgs.length > 0 && (
          <OrganizationSection title="Hosting Organization" orgs={hostingOrgs} />
        )}
        
        {supportingOrgs.length > 0 && (
          <OrganizationSection title="Supporting Organizations" orgs={supportingOrgs} />
        )}
      </div>
    </section>
  );
};

export default Organizations;
