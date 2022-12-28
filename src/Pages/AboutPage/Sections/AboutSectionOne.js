//Style
import '../../../Styles/Style.scss'

export default function AboutSectionOne() {
    return (
        <div className='AboutSectionOneContainer'>
            <div className='AboutSectionOne'>
                <div id='Left'>
                    <h1>Walrus ROV Aims To Bring Innovation To The ROV Market</h1>
                </div>
                <div id='Right'>
                    <p id='TopP'>
                    Four months ago, we at Walrus ROV set out on a mission to change the way we think about personal ROVs. Most modern small-ROVs are often limited by the need to use a physical connection, a tether, between the ROV and the control station. 
                    </p>
                    <p id='BottomP'>
                    Walrus ROV aims to bring new innovation to this segment by introducing a semi-wireless approach for communicating with the ROV while in use. Our goal is to improve the flexibility of ROVs by giving the operator more freedom while controlling the ROV.
                    </p>
                </div>
            </div>
        </div>
    )
}