export default async function handler(req, res) {
  try {
    const url = "https://iskcon.today/api/calendar?region=kolkata&limit=5";

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Madhabam Ekadashi Calendar (educational, non-commercial)",
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to fetch ISKCON data" });
  }
}
