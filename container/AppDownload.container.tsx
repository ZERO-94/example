import React from "react";
import AppDownloadComponent, {DownloadButton} from "../components/fundiin/download-banner/download-banner.component";

const AppDownload = () => {
    return <AppDownloadComponent
                imageBanner="/assets/files/app-download.png"
                extra={[
                    <DownloadButton
                    link={"https://play.google.com/store/apps/details?id=com.fundiin.app&hl=vi"}
                    image={'/images/play-store.png'}
                    subtitle="Tải trên"
                    title="Google Play"
                    />,
                    <div style={{ display: "inline-block", width: "10px"}}></div>,
                    <DownloadButton
                        link={"https://apps.apple.com/vn/app/fundiin-mua-tr%E1%BA%A3-sau-0/id1488771737?l=vi"}
                        image={'/images/apple-store.png'}
                        subtitle="Tải trên"
                        title="App Store"
                    />
                ]}
            />
}

export default AppDownload;