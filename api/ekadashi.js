export default async function handler(req, res) {
  try {
    const githubURL = "https://raw.githubusercontent.com/acmosertl/Madhavam-Surya-Siddhanto-Panjika-/refs/heads/main/ekadashi.json";
    
    // 🛡️ ফেচ করো গিটহাব থেকে
    const response = await fetch(githubURL, { cache: "no-store" });
    if (!response.ok) throw new Error("GitHub fetch failed");

    const data = await response.json();

    // ✅ CORS ও JSON রিটার্ন ঠিকভাবে অ্যাড করো
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);
  } catch (error) {
    console.error("❌ Ekadashi data load failed:", error);
    res.status(500).json({ error: "Failed to load Ekadashi data" });
  }
}
