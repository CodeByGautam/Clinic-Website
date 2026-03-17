import { POST as sendMailPost } from "../sendMail/route";

export async function POST(request) {
  const res = await sendMailPost(request);

  let data = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (res.ok) {
    return Response.json({ success: true });
  }

  return Response.json(
    { success: false, error: data?.error || "Failed to send appointment email." },
    { status: res.status }
  );
}
