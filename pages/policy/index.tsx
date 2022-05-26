import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PrivacyPage = () => {

    const route = useRouter();

    useEffect(() => {
        route.push('/');
    });

    return (
        <div>
        </div>
    );
}

export default PrivacyPage;