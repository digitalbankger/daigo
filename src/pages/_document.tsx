import classNames from 'classnames';
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import Script from 'next/script';

function Document({ __NEXT_DATA__ }: DocumentProps) {
    const { bodyClass } = __NEXT_DATA__.props.pageProps;

    return (
        <Html lang="ru" className={classNames('no-js', bodyClass)}>
            <Head />

            <body>
                <Script
                    id="no-js"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `document.documentElement.classList.replace('no-js', 'js');`,
                    }}
                ></Script>
                <Main />
                <div id="modal-root"></div>
                <NextScript />
                {process.env.NODE_ENV === 'production' && (
                    <>
                        {/* VK Pixel */}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `
                                <script type="text/javascript">
                                (function (d, w) {
                                    var n = d.getElementsByTagName("script")[0],
                                        s = d.createElement("script");
                                        s.type = "text/javascript";
                                        s.async = true;
                                        s.src = "https://qoopler.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
                                        n.parentNode.insertBefore(s, n);
                                })(document, window);
                                </script>
                                `,
                            }}
                        ></div>
                        {/* /VK Pixel */}
                    </>
                )}
            </body>
        </Html>
    );
}

export default Document;
