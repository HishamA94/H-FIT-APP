// هذا الملف هو حلقة الوصل بين موقعك وقاعدة البيانات
// H-FIT Configuration

const SUPABASE_URL = "https://valmvuperfpsftqoptbp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbG12dXBlcmZwc2Z0cW9wdGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4ODU1MDAsImV4cCI6MjA4NDQ2MTUwMH0.0EcQBFQa52Sfuh77V-iW1Q7gGBtNFpGS_2P_DthDMLU";

// تهيئة الاتصال (سنستخدم مكتبة Supabase عبر CDN في ملفات HTML)
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("H-FIT: تم الاتصال بقاعدة البيانات بنجاح");