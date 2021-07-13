export default class GallerySetting {
    constructor(path, title, caption, thumbnailPath, thumbnailX, thumbnailY) {
        this.path = path;
        this.title = title;
        this.caption = caption;
        this.thumbnailPath = thumbnailPath;
        this.thumbnailX = thumbnailX;
        this.thumbnailY = thumbnailY;
    }

    static CreateGallery(gallerySettings, galleryName) {
        return gallerySettings.Settings.map(function(setting) {
            var titleDiv = null;
            var style = null;
            if (setting.title != null) {
                titleDiv = <div className="caption-overlay">
                    <div className="caption-overlay-inner">
                        <div className="caption-text">
                            {setting.title}
                        </div>
                    </div>
                </div>
            }
            if (setting.thumbnailX == null) {
                style = {"objectFit": "none"}
            } else {
                style = {"objectFit": "cover", "objectPosition": setting.thumbnailX + " " + setting.thumbnailY};
            }
            return <a key={setting.path} data-fancybox={galleryName} href={setting.path} data-caption={setting.caption} fit={setting.fit}>
                <div className="gallery-img">
                    <img className="center-preview" src={setting.thumbnailPath} alt={setting.caption} style={style}/>
                    {titleDiv}
                </div>
            </a>
        })
    }
}