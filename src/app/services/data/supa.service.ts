import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupaService {
  private supabase_client: SupabaseClient;

  constructor() {
    this.supabase_client = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // register
  signUp(email: string, password: string) {
    return this.supabase_client.auth.signUp({ email, password });
  }

  // login
  signIn(email: string, password: string) {
    return this.supabase_client.auth.signInWithPassword({ email, password });
  }
}
