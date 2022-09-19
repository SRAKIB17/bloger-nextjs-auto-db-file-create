import React from 'react';

const Index = () => {
    return (
        <div>

        </div>
    );
};

export default Index;


export async function getServerSideProps(context) {
    const res = context?.res;
    const req = context?.req;

    console.log(req)

    const errMsg = "<h1>Could Not Find Code This Code</h1>"
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(errMsg);
    res.end();


    return {
        props: {},
    }
}