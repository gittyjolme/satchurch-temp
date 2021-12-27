import React, { Children, Fragment, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/satchurch.module.css'

//COMPONENTS

//OPERATIONS
import MainLayout from './layouts/main'
import router from 'next/router'

const Home: NextPage = () => { 
  return(
    <Fragment>
      <MainLayout onFlicks={()=>{
        return  <Fragment>
                      <section style={{
                          position:"absolute",
                          top:"30%",
                          width:"100%",
                          left:"auto",
                          margin:"auto"
                        }}>
                        <svg width="100%" height="154" viewBox="0 0 100% 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="37" width="100%" height="100" fill="#33C51B"/>
                        <path d="M180.507 90.8965C180.507 90.2878 180.292 89.8223 179.862 89.5C179.433 89.1706 178.659 88.8268 177.542 88.4688C176.425 88.1035 175.54 87.7454 174.889 87.3945C173.113 86.4349 172.225 85.1423 172.225 83.5166C172.225 82.6715 172.461 81.9196 172.934 81.2607C173.413 80.5947 174.097 80.0755 174.985 79.7031C175.881 79.3307 176.883 79.1445 177.993 79.1445C179.11 79.1445 180.106 79.3486 180.979 79.7568C181.853 80.1579 182.53 80.7272 183.01 81.4648C183.497 82.2025 183.74 83.0404 183.74 83.9785H180.518C180.518 83.2624 180.292 82.7074 179.841 82.3135C179.39 81.9124 178.756 81.7119 177.939 81.7119C177.152 81.7119 176.539 81.8802 176.103 82.2168C175.666 82.5462 175.447 82.9831 175.447 83.5273C175.447 84.0358 175.701 84.4619 176.21 84.8057C176.726 85.1494 177.481 85.4717 178.477 85.7725C180.31 86.3239 181.646 87.0078 182.483 87.8242C183.321 88.6406 183.74 89.6576 183.74 90.875C183.74 92.2285 183.228 93.292 182.204 94.0654C181.18 94.8317 179.801 95.2148 178.068 95.2148C176.865 95.2148 175.77 94.9964 174.781 94.5596C173.793 94.1156 173.037 93.5104 172.515 92.7441C171.999 91.9779 171.741 91.0898 171.741 90.0801H174.975C174.975 91.806 176.006 92.6689 178.068 92.6689C178.835 92.6689 179.433 92.515 179.862 92.207C180.292 91.8919 180.507 91.4551 180.507 90.8965ZM189.154 89.4893V95H185.932V79.3594H192.033C193.208 79.3594 194.239 79.5742 195.127 80.0039C196.022 80.4336 196.71 81.0459 197.189 81.8408C197.669 82.6286 197.909 83.5273 197.909 84.5371C197.909 86.0697 197.383 87.2799 196.33 88.168C195.285 89.0488 193.834 89.4893 191.979 89.4893H189.154ZM189.154 86.8789H192.033C192.885 86.8789 193.534 86.6784 193.978 86.2773C194.429 85.8763 194.654 85.3034 194.654 84.5586C194.654 83.7923 194.429 83.1729 193.978 82.7002C193.526 82.2275 192.903 81.984 192.108 81.9697H189.154V86.8789ZM203.56 95H200.337V79.3594H203.56V95ZM212.347 89.2744H209.779V95H206.557V79.3594H212.368C214.216 79.3594 215.641 79.7712 216.644 80.5947C217.646 81.4183 218.147 82.582 218.147 84.0859C218.147 85.153 217.915 86.0446 217.449 86.7607C216.991 87.4697 216.293 88.0355 215.354 88.458L218.738 94.8496V95H215.279L212.347 89.2744ZM209.779 86.6641H212.379C213.188 86.6641 213.815 86.46 214.259 86.0518C214.703 85.6364 214.925 85.0671 214.925 84.3438C214.925 83.6061 214.714 83.026 214.291 82.6035C213.876 82.181 213.235 81.9697 212.368 81.9697H209.779V86.6641ZM224.034 95H220.812V79.3594H224.034V95ZM238.482 81.9697H233.691V95H230.469V81.9697H225.742V79.3594H238.482V81.9697ZM244.53 90.7891C244.53 90.0658 244.731 89.3962 245.132 88.7803C245.54 88.1644 246.285 87.4805 247.366 86.7285C246.901 86.1055 246.535 85.5218 246.271 84.9775C246.006 84.4261 245.873 83.8532 245.873 83.2588C245.873 82.0413 246.256 81.0531 247.022 80.2939C247.796 79.5277 248.834 79.1445 250.138 79.1445C251.305 79.1445 252.261 79.4919 253.006 80.1865C253.758 80.8812 254.134 81.7477 254.134 82.7861C254.134 84.0322 253.504 85.1315 252.243 86.084L251.04 86.9541L253.736 90.0908C254.159 89.2601 254.37 88.3434 254.37 87.3408H257.013C257.013 89.3747 256.544 91.0218 255.605 92.2822L257.947 95H254.424L253.618 94.0762C252.465 94.8353 251.14 95.2148 249.644 95.2148C248.097 95.2148 246.858 94.8102 245.927 94.001C244.996 93.1846 244.53 92.1139 244.53 90.7891ZM249.794 92.7227C250.539 92.7227 251.244 92.515 251.91 92.0996L248.827 88.5332L248.602 88.6943C247.964 89.2386 247.646 89.8796 247.646 90.6172C247.646 91.2402 247.842 91.7487 248.236 92.1426C248.637 92.5293 249.157 92.7227 249.794 92.7227ZM248.655 83.2158C248.655 83.7529 248.97 84.4297 249.601 85.2461L250.428 84.6982C250.85 84.4261 251.14 84.1611 251.298 83.9033C251.463 83.6455 251.545 83.3376 251.545 82.9795C251.545 82.6214 251.412 82.3099 251.147 82.0449C250.882 81.7799 250.542 81.6475 250.127 81.6475C249.683 81.6475 249.325 81.7907 249.053 82.0771C248.788 82.3636 248.655 82.7432 248.655 83.2158ZM276.209 81.9697H271.418V95H268.195V81.9697H263.469V79.3594H276.209V81.9697ZM283.847 89.2744H281.279V95H278.057V79.3594H283.868C285.716 79.3594 287.141 79.7712 288.144 80.5947C289.146 81.4183 289.647 82.582 289.647 84.0859C289.647 85.153 289.415 86.0446 288.949 86.7607C288.491 87.4697 287.793 88.0355 286.854 88.458L290.238 94.8496V95H286.779L283.847 89.2744ZM281.279 86.6641H283.879C284.688 86.6641 285.315 86.46 285.759 86.0518C286.203 85.6364 286.425 85.0671 286.425 84.3438C286.425 83.6061 286.214 83.026 285.791 82.6035C285.376 82.181 284.735 81.9697 283.868 81.9697H281.279V86.6641ZM303.945 79.3594V89.6611C303.945 91.3727 303.408 92.7262 302.334 93.7217C301.267 94.7171 299.806 95.2148 297.951 95.2148C296.125 95.2148 294.675 94.7314 293.601 93.7646C292.526 92.7979 291.979 91.4694 291.957 89.7793V79.3594H295.18V89.6826C295.18 90.7067 295.423 91.4551 295.91 91.9277C296.404 92.3932 297.085 92.626 297.951 92.626C299.763 92.626 300.683 91.6735 300.712 89.7686V79.3594H303.945ZM318.361 81.9697H313.57V95H310.348V81.9697H305.621V79.3594H318.361V81.9697ZM332.938 95H329.716V88.2969H323.432V95H320.209V79.3594H323.432V85.6973H329.716V79.3594H332.938V95Z" fill="white"/>
                        <path d="M409.301 90.7783L410.826 83.377H413.823L410.858 95H408.259L406.057 87.6846L403.854 95H401.266L398.301 83.377H401.298L402.812 90.7676L404.939 83.377H407.185L409.301 90.7783ZM420.72 95.2148C419.015 95.2148 417.626 94.6921 416.552 93.6465C415.485 92.6009 414.951 91.208 414.951 89.4678V89.167C414.951 87.9997 415.177 86.9577 415.628 86.041C416.079 85.1172 416.716 84.4082 417.54 83.9141C418.371 83.4128 419.316 83.1621 420.376 83.1621C421.966 83.1621 423.215 83.6634 424.125 84.666C425.042 85.6686 425.5 87.0902 425.5 88.9307V90.1982H418.099C418.199 90.9574 418.5 91.5661 419.001 92.0244C419.509 92.4827 420.15 92.7119 420.924 92.7119C422.12 92.7119 423.054 92.2786 423.728 91.4121L425.253 93.1201C424.787 93.779 424.157 94.2946 423.362 94.667C422.567 95.0322 421.687 95.2148 420.72 95.2148ZM420.365 85.6758C419.749 85.6758 419.248 85.8835 418.861 86.2988C418.482 86.7142 418.238 87.3086 418.131 88.082H422.449V87.835C422.435 87.1475 422.249 86.6175 421.891 86.2451C421.533 85.8656 421.024 85.6758 420.365 85.6758ZM437.746 89.2959C437.746 91.1579 437.349 92.6117 436.554 93.6572C435.759 94.6956 434.649 95.2148 433.224 95.2148C431.963 95.2148 430.957 94.7314 430.205 93.7646L430.065 95H427.272V78.5H430.377V84.4189C431.093 83.5811 432.035 83.1621 433.202 83.1621C434.62 83.1621 435.73 83.6849 436.532 84.7305C437.341 85.7689 437.746 87.2334 437.746 89.124V89.2959ZM434.642 89.0703C434.642 87.8958 434.455 87.04 434.083 86.5029C433.711 85.9587 433.156 85.6865 432.418 85.6865C431.43 85.6865 430.749 86.0911 430.377 86.9004V91.4873C430.757 92.3037 431.444 92.7119 432.439 92.7119C433.442 92.7119 434.101 92.2178 434.416 91.2295C434.566 90.7568 434.642 90.0371 434.642 89.0703ZM445.706 89.5537H439.658V87.0508H445.706V89.5537ZM458.672 89.2959C458.672 91.1579 458.274 92.6117 457.479 93.6572C456.685 94.6956 455.575 95.2148 454.149 95.2148C452.889 95.2148 451.883 94.7314 451.131 93.7646L450.991 95H448.198V78.5H451.303V84.4189C452.019 83.5811 452.961 83.1621 454.128 83.1621C455.546 83.1621 456.656 83.6849 457.458 84.7305C458.267 85.7689 458.672 87.2334 458.672 89.124V89.2959ZM455.567 89.0703C455.567 87.8958 455.381 87.04 455.009 86.5029C454.636 85.9587 454.081 85.6865 453.344 85.6865C452.355 85.6865 451.675 86.0911 451.303 86.9004V91.4873C451.682 92.3037 452.37 92.7119 453.365 92.7119C454.368 92.7119 455.027 92.2178 455.342 91.2295C455.492 90.7568 455.567 90.0371 455.567 89.0703ZM467.556 93.8184C466.789 94.7493 465.729 95.2148 464.376 95.2148C463.13 95.2148 462.177 94.8568 461.519 94.1406C460.867 93.4245 460.534 92.3753 460.52 90.9932V83.377H463.624V90.8857C463.624 92.096 464.175 92.7012 465.278 92.7012C466.331 92.7012 467.054 92.3359 467.448 91.6055V83.377H470.563V95H467.642L467.556 93.8184ZM476.182 95H473.066V83.377H476.182V95ZM472.884 80.3691C472.884 79.9036 473.038 79.5205 473.346 79.2197C473.661 78.9189 474.087 78.7686 474.624 78.7686C475.154 78.7686 475.576 78.9189 475.892 79.2197C476.207 79.5205 476.364 79.9036 476.364 80.3691C476.364 80.8418 476.203 81.2285 475.881 81.5293C475.566 81.8301 475.147 81.9805 474.624 81.9805C474.101 81.9805 473.679 81.8301 473.356 81.5293C473.041 81.2285 472.884 80.8418 472.884 80.3691ZM482.025 95H478.91V78.5H482.025V95ZM484.109 89.1025C484.109 87.2907 484.514 85.8477 485.323 84.7734C486.14 83.6992 487.253 83.1621 488.664 83.1621C489.796 83.1621 490.73 83.5846 491.468 84.4297V78.5H494.583V95H491.779L491.629 93.7646C490.855 94.7314 489.86 95.2148 488.643 95.2148C487.275 95.2148 486.175 94.6777 485.345 93.6035C484.521 92.5221 484.109 91.0218 484.109 89.1025ZM487.214 89.3281C487.214 90.4167 487.404 91.251 487.783 91.8311C488.163 92.4111 488.714 92.7012 489.438 92.7012C490.397 92.7012 491.074 92.2965 491.468 91.4873V86.9004C491.081 86.0911 490.411 85.6865 489.459 85.6865C487.962 85.6865 487.214 86.9004 487.214 89.3281ZM500.266 95H497.15V83.377H500.266V95ZM496.968 80.3691C496.968 79.9036 497.122 79.5205 497.43 79.2197C497.745 78.9189 498.171 78.7686 498.708 78.7686C499.238 78.7686 499.66 78.9189 499.976 79.2197C500.291 79.5205 500.448 79.9036 500.448 80.3691C500.448 80.8418 500.287 81.2285 499.965 81.5293C499.65 81.8301 499.231 81.9805 498.708 81.9805C498.185 81.9805 497.763 81.8301 497.44 81.5293C497.125 81.2285 496.968 80.8418 496.968 80.3691ZM505.69 83.377L505.787 84.7197C506.618 83.6813 507.731 83.1621 509.128 83.1621C510.36 83.1621 511.276 83.5238 511.878 84.2471C512.479 84.9704 512.787 86.0518 512.802 87.4912V95H509.697V87.5664C509.697 86.9076 509.554 86.4313 509.268 86.1377C508.981 85.8369 508.505 85.6865 507.839 85.6865C506.965 85.6865 506.31 86.0589 505.873 86.8037V95H502.769V83.377H505.69ZM514.714 89.1025C514.714 87.3193 515.136 85.8835 515.981 84.7949C516.834 83.7064 517.979 83.1621 519.419 83.1621C520.694 83.1621 521.686 83.599 522.395 84.4727L522.523 83.377H525.338V94.6133C525.338 95.6302 525.105 96.5146 524.64 97.2666C524.181 98.0186 523.533 98.5915 522.695 98.9854C521.857 99.3792 520.876 99.5762 519.752 99.5762C518.9 99.5762 518.069 99.4043 517.26 99.0605C516.451 98.724 515.838 98.2871 515.423 97.75L516.798 95.8594C517.571 96.7259 518.509 97.1592 519.612 97.1592C520.436 97.1592 521.077 96.9372 521.535 96.4932C521.993 96.0563 522.223 95.4333 522.223 94.624V94.001C521.507 94.8102 520.565 95.2148 519.397 95.2148C518.001 95.2148 516.869 94.6706 516.003 93.582C515.144 92.4863 514.714 91.0361 514.714 89.2314V89.1025ZM517.818 89.3281C517.818 90.3809 518.03 91.208 518.452 91.8096C518.875 92.404 519.455 92.7012 520.192 92.7012C521.138 92.7012 521.814 92.3467 522.223 91.6377V86.75C521.807 86.041 521.138 85.6865 520.214 85.6865C519.469 85.6865 518.882 85.9909 518.452 86.5996C518.03 87.2083 517.818 88.1178 517.818 89.3281ZM539.507 91.7881C539.507 91.4085 539.317 91.1113 538.938 90.8965C538.565 90.6745 537.964 90.4775 537.133 90.3057C534.368 89.7256 532.986 88.5511 532.986 86.7822C532.986 85.751 533.412 84.8916 534.265 84.2041C535.124 83.5094 536.245 83.1621 537.627 83.1621C539.102 83.1621 540.28 83.5094 541.161 84.2041C542.049 84.8988 542.493 85.8011 542.493 86.9111H539.389C539.389 86.4671 539.245 86.1019 538.959 85.8154C538.673 85.5218 538.225 85.375 537.616 85.375C537.093 85.375 536.689 85.4932 536.402 85.7295C536.116 85.9658 535.973 86.2666 535.973 86.6318C535.973 86.9756 536.134 87.2549 536.456 87.4697C536.785 87.6774 537.337 87.86 538.11 88.0176C538.884 88.168 539.535 88.3398 540.065 88.5332C541.705 89.1348 542.525 90.1768 542.525 91.6592C542.525 92.7191 542.071 93.5785 541.161 94.2373C540.252 94.889 539.077 95.2148 537.638 95.2148C536.664 95.2148 535.797 95.043 535.038 94.6992C534.286 94.3483 533.695 93.8721 533.266 93.2705C532.836 92.6618 532.621 92.0065 532.621 91.3047H535.564C535.593 91.8561 535.797 92.2786 536.177 92.5723C536.556 92.8659 537.065 93.0127 537.702 93.0127C538.297 93.0127 538.744 92.9017 539.045 92.6797C539.353 92.4505 539.507 92.1533 539.507 91.7881ZM548.251 80.5195V83.377H550.238V85.6543H548.251V91.4551C548.251 91.8848 548.333 92.1927 548.498 92.3789C548.663 92.5651 548.978 92.6582 549.443 92.6582C549.787 92.6582 550.091 92.6331 550.356 92.583V94.9355C549.748 95.1217 549.121 95.2148 548.477 95.2148C546.299 95.2148 545.189 94.1156 545.146 91.917V85.6543H543.449V83.377H545.146V80.5195H548.251ZM555.244 95H552.129V83.377H555.244V95ZM551.946 80.3691C551.946 79.9036 552.1 79.5205 552.408 79.2197C552.723 78.9189 553.149 78.7686 553.687 78.7686C554.216 78.7686 554.639 78.9189 554.954 79.2197C555.269 79.5205 555.427 79.9036 555.427 80.3691C555.427 80.8418 555.266 81.2285 554.943 81.5293C554.628 81.8301 554.209 81.9805 553.687 81.9805C553.164 81.9805 552.741 81.8301 552.419 81.5293C552.104 81.2285 551.946 80.8418 551.946 80.3691ZM561.088 95H557.973V78.5H561.088V95ZM566.932 95H563.816V78.5H566.932V95ZM581.938 93.8184C581.172 94.7493 580.112 95.2148 578.759 95.2148C577.513 95.2148 576.56 94.8568 575.901 94.1406C575.25 93.4245 574.917 92.3753 574.902 90.9932V83.377H578.007V90.8857C578.007 92.096 578.558 92.7012 579.661 92.7012C580.714 92.7012 581.437 92.3359 581.831 91.6055V83.377H584.946V95H582.024L581.938 93.8184ZM590.146 83.377L590.242 84.7197C591.073 83.6813 592.187 83.1621 593.583 83.1621C594.815 83.1621 595.731 83.5238 596.333 84.2471C596.935 84.9704 597.243 86.0518 597.257 87.4912V95H594.152V87.5664C594.152 86.9076 594.009 86.4313 593.723 86.1377C593.436 85.8369 592.96 85.6865 592.294 85.6865C591.42 85.6865 590.765 86.0589 590.328 86.8037V95H587.224V83.377H590.146ZM599.137 89.1025C599.137 87.2907 599.541 85.8477 600.351 84.7734C601.167 83.6992 602.281 83.1621 603.691 83.1621C604.823 83.1621 605.757 83.5846 606.495 84.4297V78.5H609.61V95H606.807L606.656 93.7646C605.883 94.7314 604.887 95.2148 603.67 95.2148C602.302 95.2148 601.203 94.6777 600.372 93.6035C599.549 92.5221 599.137 91.0218 599.137 89.1025ZM602.241 89.3281C602.241 90.4167 602.431 91.251 602.811 91.8311C603.19 92.4111 603.742 92.7012 604.465 92.7012C605.424 92.7012 606.101 92.2965 606.495 91.4873V86.9004C606.108 86.0911 605.439 85.6865 604.486 85.6865C602.99 85.6865 602.241 86.9004 602.241 89.3281ZM617.366 95.2148C615.662 95.2148 614.272 94.6921 613.198 93.6465C612.131 92.6009 611.598 91.208 611.598 89.4678V89.167C611.598 87.9997 611.823 86.9577 612.274 86.041C612.726 85.1172 613.363 84.4082 614.187 83.9141C615.017 83.4128 615.963 83.1621 617.022 83.1621C618.612 83.1621 619.862 83.6634 620.771 84.666C621.688 85.6686 622.146 87.0902 622.146 88.9307V90.1982H614.745C614.845 90.9574 615.146 91.5661 615.647 92.0244C616.156 92.4827 616.797 92.7119 617.57 92.7119C618.766 92.7119 619.701 92.2786 620.374 91.4121L621.899 93.1201C621.434 93.779 620.804 94.2946 620.009 94.667C619.214 95.0322 618.333 95.2148 617.366 95.2148ZM617.012 85.6758C616.396 85.6758 615.895 85.8835 615.508 86.2988C615.128 86.7142 614.885 87.3086 614.777 88.082H619.096V87.835C619.081 87.1475 618.895 86.6175 618.537 86.2451C618.179 85.8656 617.671 85.6758 617.012 85.6758ZM630.45 86.2881C630.028 86.2308 629.655 86.2021 629.333 86.2021C628.159 86.2021 627.389 86.5996 627.023 87.3945V95H623.919V83.377H626.852L626.938 84.7627C627.561 83.6956 628.424 83.1621 629.526 83.1621C629.87 83.1621 630.192 83.2087 630.493 83.3018L630.45 86.2881ZM642.256 90.7783L643.781 83.377H646.778L643.813 95H641.214L639.012 87.6846L636.81 95H634.221L631.256 83.377H634.253L635.768 90.7676L637.895 83.377H640.14L642.256 90.7783ZM655.061 95C654.917 94.7207 654.813 94.3734 654.749 93.958C653.997 94.7959 653.02 95.2148 651.816 95.2148C650.678 95.2148 649.732 94.8854 648.98 94.2266C648.236 93.5677 647.863 92.737 647.863 91.7344C647.863 90.5026 648.318 89.5573 649.228 88.8984C650.144 88.2396 651.465 87.9066 653.191 87.8994H654.62V87.2334C654.62 86.6963 654.48 86.2666 654.201 85.9443C653.929 85.6221 653.496 85.4609 652.901 85.4609C652.379 85.4609 651.967 85.5863 651.666 85.8369C651.372 86.0876 651.226 86.4313 651.226 86.8682H648.121C648.121 86.195 648.329 85.5719 648.744 84.999C649.16 84.4261 649.747 83.9785 650.506 83.6562C651.265 83.3268 652.117 83.1621 653.062 83.1621C654.495 83.1621 655.63 83.5238 656.468 84.2471C657.313 84.9632 657.735 85.973 657.735 87.2764V92.3145C657.743 93.4173 657.896 94.2516 658.197 94.8174V95H655.061ZM652.493 92.8408C652.951 92.8408 653.374 92.7406 653.761 92.54C654.147 92.3324 654.434 92.0566 654.62 91.7129V89.7148H653.46C651.906 89.7148 651.079 90.252 650.979 91.3262L650.968 91.5088C650.968 91.8955 651.104 92.2142 651.376 92.4648C651.648 92.7155 652.021 92.8408 652.493 92.8408ZM664.288 90.6064L666.437 83.377H669.767L665.094 96.8047L664.836 97.417C664.141 98.9352 662.995 99.6943 661.398 99.6943C660.947 99.6943 660.489 99.6263 660.023 99.4902V97.1377L660.496 97.1484C661.083 97.1484 661.52 97.0589 661.807 96.8799C662.1 96.7008 662.329 96.4036 662.494 95.9883L662.859 95.0322L658.788 83.377H662.129L664.288 90.6064Z" fill="white"/>
                        <rect x="412.015" y="0.0451965" width="14" height="170.739" transform="rotate(31.4228 412.015 0.0451965)" fill="white"/>
                        </svg>
                        <button style={{
                        position:"absolute",
                        padding:"10px 20px 10px 20px",
                        width:"200px",
                        margin:"auto",
                        backgroundColor:"#ffffff",
                        borderWidth:0,
                        borderRadius:10,
                        top:"40%",
                        right:"30%",
                        fontFamily:"Segoe UI",
                        fontSize:"16pt",
                        color:"#33C51B"

                        }} onClick={()=>{router.push("/about")}}>About</button>
                      </section>
                      
                </Fragment>
      }}></MainLayout>
    </Fragment>
  )
}

export default Home
