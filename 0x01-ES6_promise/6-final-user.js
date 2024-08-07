import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(fristName, lastName, fileName){
    const p1 = signUpUser(fristName, lastName);
    const p2 = uploadPhoto(fileName);

    const results = await Promise.allSettled([p1, p2]);

    results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
}
