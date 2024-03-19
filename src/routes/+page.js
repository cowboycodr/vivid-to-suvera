import { redirect } from "@sveltejs/kit"

export const load = async () => {
    return redirect(303, "https://suvera.fromkian.com");
}