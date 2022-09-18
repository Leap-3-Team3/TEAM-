import HeroSection from "../components/HeroSection";
import HomeComments from "../components/HomeComments";
import HomeDetail from "../components/HomeDetail";

const HomeScreen = () => {
    const title1 = 'Your Hub for teamwork'
    const title2 = 'Simple task management'
    const title3 = 'Scheduling that actually works'
    const desc1 = 'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'
    const desc2 = 'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'
    const desc3 = 'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'
    const img1 = 'bg-img1'
    const img2 = 'bg-img2'
    const img3 = 'bg-img3'
    return (
        <div>
            <HeroSection></HeroSection>
            <HomeDetail position='left' title={title1} desc={desc1} img={img1}></HomeDetail>
            <HomeDetail position='right'  title={title2} desc={desc2} img={img2}></HomeDetail>
            <HomeDetail position='left' title={title3} desc={desc3} img={img3}></HomeDetail>
            <HomeComments/>
        </div>
    )
}
export default HomeScreen;