import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer ', () => {
    test('renders the footer with logo and icons', () => {
        render(<Footer />)
        const logo = screen.getByAltText('onextrapixel logo')
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', './src/assets/img/onextralogo.png');

        const facebookIcon = screen.getByAltText('facebook')
        const twittertIcon = screen.getByAltText('Twitter')
        const linkedinIcon = screen.getByAltText('linkedin')
        const instagramIcon = screen.getByAltText('instagram')

        expect(facebookIcon).toBeInTheDocument();
        expect(facebookIcon).toHaveAttribute('src', './src/assets/img/facebok.svg');

        expect(twittertIcon).toBeInTheDocument();
        expect(twittertIcon).toHaveAttribute('src', './src/assets/img/Twitter.svg');

        expect(linkedinIcon).toBeInTheDocument();
        expect(linkedinIcon).toHaveAttribute('src', './src/assets/img/linkedin.svg');

        expect(instagramIcon).toBeInTheDocument();
        expect(instagramIcon).toHaveAttribute('src', './src/assets/img/instagram.svg');


    })
})