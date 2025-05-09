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
      contatos: {
        Row: {
          created_at: string
          email: string
          id: string
          lido: boolean | null
          mensagem: string
          nome: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          lido?: boolean | null
          mensagem: string
          nome: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          lido?: boolean | null
          mensagem?: string
          nome?: string
        }
        Relationships: []
      }
      curriculos: {
        Row: {
          arquivo_url: string | null
          created_at: string
          email: string
          id: string
          lido: boolean | null
          mensagem: string | null
          nome: string
          telefone: string | null
          vaga_id: string | null
        }
        Insert: {
          arquivo_url?: string | null
          created_at?: string
          email: string
          id?: string
          lido?: boolean | null
          mensagem?: string | null
          nome: string
          telefone?: string | null
          vaga_id?: string | null
        }
        Update: {
          arquivo_url?: string | null
          created_at?: string
          email?: string
          id?: string
          lido?: boolean | null
          mensagem?: string | null
          nome?: string
          telefone?: string | null
          vaga_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "curriculos_vaga_id_fkey"
            columns: ["vaga_id"]
            isOneToOne: false
            referencedRelation: "vagas"
            referencedColumns: ["id"]
          },
        ]
      }
      documentos_app: {
        Row: {
          arquivo_url: string | null
          cliente_id: string
          created_at: string
          id: string
          link: string | null
          nome_app: string
          updated_at: string
        }
        Insert: {
          arquivo_url?: string | null
          cliente_id: string
          created_at?: string
          id?: string
          link?: string | null
          nome_app: string
          updated_at?: string
        }
        Update: {
          arquivo_url?: string | null
          cliente_id?: string
          created_at?: string
          id?: string
          link?: string | null
          nome_app?: string
          updated_at?: string
        }
        Relationships: []
      }
      orcamentos: {
        Row: {
          created_at: string
          email: string
          id: string
          lido: boolean | null
          mensagem: string | null
          nome: string
          servico_solicitado: string | null
          telefone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          lido?: boolean | null
          mensagem?: string | null
          nome: string
          servico_solicitado?: string | null
          telefone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          lido?: boolean | null
          mensagem?: string | null
          nome?: string
          servico_solicitado?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      produtos: {
        Row: {
          ativo: boolean | null
          categoria: string | null
          created_at: string
          descricao: string | null
          id: string
          imagem: string | null
          nome: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean | null
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          imagem?: string | null
          nome: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean | null
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          imagem?: string | null
          nome?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          role: string
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id: string
          role?: string
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          role?: string
        }
        Relationships: []
      }
      servicos: {
        Row: {
          ativo: boolean | null
          categoria: string | null
          created_at: string
          descricao: string | null
          id: string
          imagem: string | null
          nome: string
          updated_at: string
        }
        Insert: {
          ativo?: boolean | null
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          imagem?: string | null
          nome: string
          updated_at?: string
        }
        Update: {
          ativo?: boolean | null
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          imagem?: string | null
          nome?: string
          updated_at?: string
        }
        Relationships: []
      }
      vagas: {
        Row: {
          cargo: string
          created_at: string
          descricao: string | null
          id: string
          requisitos: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          cargo: string
          created_at?: string
          descricao?: string | null
          id?: string
          requisitos?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          cargo?: string
          created_at?: string
          descricao?: string | null
          id?: string
          requisitos?: string | null
          status?: string | null
          updated_at?: string
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
