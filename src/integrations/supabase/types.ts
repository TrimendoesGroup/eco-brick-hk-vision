export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      album_photos: {
        Row: {
          album_id: string | null
          caption: Json | null
          created_at: string
          id: string
          order_index: number
          photo_url: string
        }
        Insert: {
          album_id?: string | null
          caption?: Json | null
          created_at?: string
          id?: string
          order_index?: number
          photo_url: string
        }
        Update: {
          album_id?: string | null
          caption?: Json | null
          created_at?: string
          id?: string
          order_index?: number
          photo_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "album_photos_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "photo_albums"
            referencedColumns: ["id"]
          },
        ]
      }
      banners: {
        Row: {
          created_at: string
          description: Json
          id: string
          image_url: string
          is_active: boolean
          order_index: number
          subtitle: Json
          title: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: Json
          id?: string
          image_url: string
          is_active?: boolean
          order_index?: number
          subtitle: Json
          title: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: Json
          id?: string
          image_url?: string
          is_active?: boolean
          order_index?: number
          subtitle?: Json
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      esg_highlights: {
        Row: {
          category: Json
          created_at: string
          id: string
          is_active: boolean
          metrics: Json
          order_index: number
          updated_at: string
        }
        Insert: {
          category: Json
          created_at?: string
          id?: string
          is_active?: boolean
          metrics: Json
          order_index?: number
          updated_at?: string
        }
        Update: {
          category?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          metrics?: Json
          order_index?: number
          updated_at?: string
        }
        Relationships: []
      }
      esg_report: {
        Row: {
          created_at: string
          highlights: Json
          id: string
          metrics: Json
          report_url: string | null
          subtitle: Json
          title: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          highlights: Json
          id?: string
          metrics: Json
          report_url?: string | null
          subtitle: Json
          title: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          highlights?: Json
          id?: string
          metrics?: Json
          report_url?: string | null
          subtitle?: Json
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      impact_stats: {
        Row: {
          color: string | null
          created_at: string
          icon: string | null
          id: string
          is_active: boolean
          order_index: number
          quantity: number
          stat_key: string
          unit: Json
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          is_active?: boolean
          order_index?: number
          quantity: number
          stat_key: string
          unit: Json
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          is_active?: boolean
          order_index?: number
          quantity?: number
          stat_key?: string
          unit?: Json
          updated_at?: string
        }
        Relationships: []
      }
      organizations: {
        Row: {
          contribution: Json
          created_at: string
          id: string
          is_active: boolean
          logo_url: string
          name: Json
          order_index: number
          organization_type: string
          updated_at: string
          website_url: string | null
        }
        Insert: {
          contribution: Json
          created_at?: string
          id?: string
          is_active?: boolean
          logo_url: string
          name: Json
          order_index?: number
          organization_type: string
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          contribution?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          logo_url?: string
          name?: Json
          order_index?: number
          organization_type?: string
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      photo_albums: {
        Row: {
          cover_image_url: string
          created_at: string
          id: string
          is_active: boolean
          order_index: number
          subtitle: Json | null
          title: Json
          updated_at: string
        }
        Insert: {
          cover_image_url: string
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          subtitle?: Json | null
          title: Json
          updated_at?: string
        }
        Update: {
          cover_image_url?: string
          created_at?: string
          id?: string
          is_active?: boolean
          order_index?: number
          subtitle?: Json | null
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      school_photos: {
        Row: {
          caption: Json | null
          created_at: string
          id: string
          order_index: number
          photo_type: string
          photo_url: string
          school_id: string | null
        }
        Insert: {
          caption?: Json | null
          created_at?: string
          id?: string
          order_index?: number
          photo_type: string
          photo_url: string
          school_id?: string | null
        }
        Update: {
          caption?: Json | null
          created_at?: string
          id?: string
          order_index?: number
          photo_type?: string
          photo_url?: string
          school_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "school_photos_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      schools: {
        Row: {
          banner_image_url: string
          bottles_collected: number
          created_at: string
          id: string
          introduction: Json
          is_active: boolean
          logo_url: string
          name: Json
          order_index: number
          recycling_performance: Json | null
          students_participated: number
          updated_at: string
          video_url: string | null
        }
        Insert: {
          banner_image_url: string
          bottles_collected?: number
          created_at?: string
          id?: string
          introduction: Json
          is_active?: boolean
          logo_url: string
          name: Json
          order_index?: number
          recycling_performance?: Json | null
          students_participated?: number
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          banner_image_url?: string
          bottles_collected?: number
          created_at?: string
          id?: string
          introduction?: Json
          is_active?: boolean
          logo_url?: string
          name?: Json
          order_index?: number
          recycling_performance?: Json | null
          students_participated?: number
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: Json
          order_index: number
          organization: Json | null
          quote: Json
          role: Json
          testimonial_type: string
          thumbnail_url: string
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: Json
          order_index?: number
          organization?: Json | null
          quote: Json
          role: Json
          testimonial_type: string
          thumbnail_url: string
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: Json
          order_index?: number
          organization?: Json | null
          quote?: Json
          role?: Json
          testimonial_type?: string
          thumbnail_url?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
