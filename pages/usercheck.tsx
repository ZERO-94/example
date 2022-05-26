import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const UserCheckPage = () => {

    const router = useRouter();

    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', backgroundImage: 'url("/images/bg-fundiin.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: '2000px 100vh'}}>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '2rem'}}>
                <button style={{boxShadow: 'none', background: '#ff9800', border: '1px solid #ffb533', width: '210px', height: '54px', borderRadius: '10px', fontSize: '20px', color: '#FFF'}} onClick={() => router.push('https://emc.fundiin.vn/fmc/download-app')}><i className="fa fa-check-circle-o"></i>  ĐĂNG KÝ NGAY</button>
                <p style={{fontWeight: 'bold', textAlign: 'center', fontStyle: 'italic'}}>{'(Vui lòng dùng smartphone để đăng ký)'}</p>
                <p style={{fontSize: '2rem', textAlign: 'center', color: '#28a745 !important'}}>MUA TRẢ SAU 0%</p>
                <p style={{marginBottom: 0, fontWeight: 'bold', color: '#000'}}>Trả sau 3 kỳ hàng tháng miễn phí:</p>
                <div style={{marginBottom: '1rem'}}>
                    <p style={{marginBottom: 0, color: '#000'}}>{'(i) Ngay lập tức trong 5 giây.'}</p>
                    <p style={{color: '#000'}}>{'(ii) Chỉ với 1 tấm hình Chứng minh thư.'}</p>
                </div>
                <p style={{display: 'inline', fontWeight: 'bold'}}>Tìm hiểu thêm về chương trình: <Link href="https://fundiin.vn/"><a style={{fontWeight: 'bold', color: 'blue'}}>Link</a></Link></p>
            </div>
        </div>
        </>
    );
}

export default UserCheckPage;