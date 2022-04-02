import { Image } from "components/shared-ui/image"

export const Journey = () => { 
    return (
        <section className="section journey">
            <p>Enabling Worldwide. Innovating. <span className='white_color'>Breaking Boundaries</span> from Singapore | Japan | India</p>
            <div className='section__heading'>
                <Image width={150} src="https://cdn.guardianlink.io/product-hotspot/images/man_dance.png" className="dancing_man"/>
                <h2 className="white_color">Ab<span className="roun_icon"></span>ut Us</h2>
            </div>
            <p className="bold">Humble Beginnings. Amazing Journeys.</p>
            <p>Bootstrapped. Founded 2016.</p>

            <div className="count__sec-wrap">
                <div className="count__sec">
                    <div class="num_s">
                        <h2><span class="h_num">45</span> NFT <b class="white_color">Exchanges <br/>Powered </b></h2>
                    </div>
                    <div class="num_s">
                        <h2><span class="h_num">45</span> NFT <b class="white_color">Exchanges <br/>Powered </b></h2>
                    </div>
                </div>
                <div className="count__sec">
                    <div class="num_s">
                        <h2><span class="h_num">160</span> GuardianLink <br/><span class="white_color">Active </span></h2>
                    </div>
                    <div class="num_s">
                        <h2><span class="h_num">40</span> <span class="white_color">Social Tokens<br/> Launched</span></h2>
                    </div>
                    <div class="num_s">
                        <h2><span class="h_num">30</span> <span class="white_color">Countries<br/> Worldwide</span></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}