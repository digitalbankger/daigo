'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export const YM_ID = 31773751;

const Metrics = () => {
    const pathname = usePathname();

    useEffect(() => {
        (window as any).ym?.(YM_ID, 'hit', pathname);
    }, [pathname]);

    return (
        <>
            <div
                id="script-ym"
                dangerouslySetInnerHTML={{
                    __html: `
                            <script>
                                (function(m, e, t, r, i, k, a) {
                                    m[i] = m[i] || function() {
                                        (m[i].a = m[i].a || []).push(arguments)
                                    };
                                    m[i].l = 1 * new Date();
                                    for (var j = 0; j < document.scripts.length; j++) {
                                        if (document.scripts[j].src === r) {
                                            return;
                                        }
                                    }
                                    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                                })
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                            
                                ym(${YM_ID}, "init", {
                                    defer: true,
                                    clickmap: true,
                                    trackLinks: true,
                                    accurateTrackBounce: true,
                                    webvisor: true,
                                    ecommerce: "dataLayer"
                                });
                            </script>

                            <!-- Roistat Counter Start -->
                            <script>
                                (function(w, d, s, h, id) {
                                    w.roistatProjectId = id; w.roistatHost = h;
                                    var p = d.location.protocol == "https:" ? "https://" : "http://";
                                    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                                    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
                                })(window, document, 'script', 'cloud.roistat.com', '12097aa87dee89b971b5c22e330b796c');
                            </script>
                            <!-- Roistat Counter End -->

                            <noscript><div><img src="https://mc.yandex.ru/watch/${YM_ID}" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                    `,
                }}
            ></div>
        </>
    );
};

export default Metrics;
