### server site render

- su dung cache
    + s-maxage=5
    + s-maxage and stale-while-revalidate
    + s-maxage and stale-while-revalidate=5
cái chỉ test đc trên production and cache in CDN
- context.res.setHeader('Cache-Control', 's-maxage=5') trong context của getServerSideProps
request đến server thì gọi getServerSideProps xong thì nó sẽ cache resouce đấy 5s và các request trước 5s sẽ đc trả về dử liệu trong cache, hết 5s thì sẽ giải phóng cache
và request đến thì gọi lại hàm getServerSideProps thí sẽ tiếp tục cache


- context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')
request đén server thì gọi getServerSideProps xong thì nó sẽ cache resource đấy 5s và các request trước 5s sẽ đc trả về dữ liệu trong cache
hết 5s nó vẫn trả về dữ liệu trong cache nhung sau đó call getServerSideProps rồi set dữ liệu mới vào cache với số s maxage

context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5')
request đén server thì gọi getServerSideProps xong thì nó sẽ cache resource đấy 5s và các request trước 5s sẽ đc trả về dữ liệu trong cache
hết 5s từ 5 -> 10 s nó sẽ trả về thằng dữ liệu cũ trong cache và call getServerSideProps dữ liệu mới sẽ đước trả về request sau 10s

note CDN, mỗi khi new deploy lên server với server bt thì sẽ vẫn có dữ liệu cũ trong cdn với Vercel nó sẽ clear cho chúng ta

cách này ứng dụng đối với trang publish còn đối với trang hiển thị theo user thì sẽ không đc vì nó sẽ cchứa nhiều logic hơn

### Incremental Static Regeneration ISR
SSG + able to generate html on demand
100,000 products
- Faster Builds: generate the most popular 1000 products at build time, if request the product 1001, request made to ther products will be cache miss and statically generate on-demand: 1 minute builds

- Higher Cache Hit Rate: generate 10,000 products at build-time, ensuring more products are cached ahead of a user's request: 8-minute builds

ISR uses: in getStaticProps using specific param `revalidate: 60` 60s

0s  ----------------------------------------------------------> 60s trờ đi------------------------------------>
generate page             serve from cache              return Stale page                                `Serve from cache V2`
                                                        `Generate new page with new V2` ----------------------->update cache

- ISR có option quan trọng là trong getStaticPath là fallback khi người dùng request đến sản phầm 1001 
+ với fallback bàng block, next sẽ server render cái products đấy trong reuest đầu tiên(bằng cách gọi getStaticProp để lấy dữ page mới về ), sau đó sẽ serve file trong cache

+ Với fallback bằng true, server sẽ trả về ngay lập tức 1 static page với loading, và sau khi loading xong sẽ trả về dư liệu cho người dùng

-- preferred blocking


CHÚ Ý: không phải cứ đén 60s nó chạy lại mà phải có request đến logic đấy thì nó mới generate new page với version mới
public pages with no data: SSG
public pages with data and can be updated from CMS: ISR
private pages: SSG + CSR


token luu local storage xss attack
ko lien quan den tien bac thi dc


token luu Cookie csrf attck
neu lq den tai chinh tien bac thi luu cookie

vay xss attck
la hacker bang cach nao do nhung doan script ban vao trang web cua minh roi nguoi dung se bam vao

de chong dc 2 loai attact nay dung sanitize html, dompurify loai bo cac script ko an toan

th 2 csrf ...

nextjs handle authentication
client ------> Post api/login ---------> Api proxy(My nextjs) ---------> Api server(real api)
client <------ set http only cookie with auth token <------- api proxy <--------- apt server return auth toke

http only: true khong cho phep javascript lay token, false nguoc lai

### SWR
React hooks for data fetching
SWR is derived from `stale-while-revalidate`

server state: react query, swr, react hook

client state: redux, mobx, zustand etc are client state

in project when we use server state, so we should't use redux for client state because it too less to use instead of that we using context api

in nextjs we use SWR, in reactjs CRA(create react app) we use react query

## SWR (server state management)

revalidateOnForcus: là khi nhảy sang tab khác rồi bách lại nó sẽ gọi lai api