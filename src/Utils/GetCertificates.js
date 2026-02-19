const fetchCertificates = async () => {
    try {
        const response = await fetch(
            "/data/certificates.json"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch project data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export default fetchCertificates; 