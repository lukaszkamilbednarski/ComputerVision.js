import React from "react";
import {connect} from 'react-redux';
import 'bootstrap/scss/bootstrap.scss';
import trash from '../assets/png/trash-circle.png';
class ImageGallery extends React.Component {

    renderImageGallery = (image, index) => {
        return (
            <div key={index} className="single-image-container">
                <div className="delete-image-container">
                  <img width={40} height={40} src={trash} />
                </div>
                <img src={image.src}/>
            </div>
        )

    };

    render() {
        return (
            <div className="image-gallery-container non-active">
                <div onClick={triggerImageGallery} className="image-gallery-trigger">
                    <span>Gallery</span>
                </div>

                <div className="image-gallery-content">
                    <div className="image-gallery-list">
                        {this.props.imageGallery.map(this.renderImageGallery)}
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * Activating or deactivating an image-gallery
 */
function triggerImageGallery() {
    let container = document.getElementsByClassName("image-gallery-container")[0];
    if (container.classList.contains("non-active")) {
        container.className = "image-gallery-container active";
    } else {
        container.className = "image-gallery-container non-active";
    }
}

const mapStateToProps = state => {

    return {
        imageGallery: state.imageGallery
    }
};

export default connect(mapStateToProps)(ImageGallery);