/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
export default async (_, res) => {
    res.clearPreviewData();
  
    res.writeHead(307, { Location: '/' });
    res.end();
  };