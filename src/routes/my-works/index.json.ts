export const get = async () => {
    const res = await fetch("https://api.quran.com/api/v4/chapters?language=en")
    const data = await res.json()

    if (res.status == 200) {
        return {
            body: data
        }
    }
}