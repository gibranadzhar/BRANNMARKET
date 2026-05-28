import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl =
'https://ncwqwwetimxhoklaafsb.supabase.co'

const supabaseKey =
'sb_publishable_DWwdnTyMN7Gtt-UDfNGRRw_kH_ZqsFU'

export const supabase =
createClient(
  supabaseUrl,
  supabaseKey
)
