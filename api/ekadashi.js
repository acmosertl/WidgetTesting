export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/acmosertl/Madhavam-Surya-Siddhanto-Panjika-/refs/heads/main/ekadashi.json"
    );
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Ekadashi data" });
  }
}
