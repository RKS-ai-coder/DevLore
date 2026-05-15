import animeImage from '../assets/anime.png';
import geographyImage from '../assets/geography.png';
import politicsImage from '../assets/politics.png';
import historyImage from '../assets/history.png';
import csImage from '../assets/cs.png';
import mathImage from '../assets/math.png';
import filmImage from '../assets/film.png';
import sportImage from '../assets/sport.png';
import gkImage from '../assets/gk.png';

function QuestCategory(props) {
  return(
    <div className="quest-card-container">
        <div 
        id="31"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={animeImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Anime & Manga</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="24"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={politicsImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Politics</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="18"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={csImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Computer Science</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="23"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={historyImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">History</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="21"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={sportImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Sports</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="9"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={gkImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">General Knowledge</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="11"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={filmImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Film</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="19"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={mathImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Mathematics</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
        <div 
        id="22"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="quest-card">
          <img src={geographyImage} alt="quest-img" />
          <div className="quest-card-content">
            <div className="quest-card-name">Geography</div>
            <div className="quest-card-details">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
          </div>
        </div>
    </div>
  )
}

export default QuestCategory