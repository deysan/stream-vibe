import "./Hero.scss"

import Button from "@/components/Button"

const Hero = () => {
  const titleId = "hero-title"
  const playButtonTitle = "Play Video"

  return (
    <section aria-labelledby={titleId} className="hero">
      <div className="hero__panel">
        <div className="hero__panel-inner container">
          <button
            aria-label={playButtonTitle}
            className="hero__play-button"
            title={playButtonTitle}
            type="button"
          >
            <img
              alt={playButtonTitle}
              className="hero__play-button-image"
              height={470}
              src="/play.svg"
              width={470}
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id={titleId}>
            The Best Streaming Experience
          </h1>

          <div className="hero__description">
            <p>
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlist, so you can easily find the
              content you want to watch.
            </p>
          </div>

          <Button
            className="hero__button"
            hasFillIcon
            iconName="play"
            label="Start Watching Now"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
