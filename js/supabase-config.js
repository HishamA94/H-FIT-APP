// H-FIT Configuration
// هذا الملف يعتمد على أنك وضعت مكتبة Supabase في ملف HTML

const SUPABASE_URL = "https://valmvuperfpsftqoptbp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbG12dXBlcmZwc2Z0cW9wdGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4ODU1MDAsImV4cCI6MjA4NDQ2MTUwMH0.0EcQBFQa52Sfuh77V-iW1Q7gGBtNFpGS_2P_DthDMLU";

// التأكد من وجود المكتبة قبل الاتصال
if (typeof supabase !== 'undefined') {
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // ربط الاتصال بالنافذة لكي تراه باقي الملفات
    window._supabase = _supabase;
    
    console.log("H-FIT: تم الاتصال بقاعدة البيانات بنجاح ✅");
} else {
    console.error("خطأ: لم يتم العثور على مكتبة Supabase! تأكد من إضافتها في ملف HTML");
}