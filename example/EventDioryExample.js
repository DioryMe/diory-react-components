import React from 'react'
import { EventDiory } from '../lib'

const eventDiory = {
  text: 'Weekend in Tampere',
  image: 'http://blog.radissonblu.com/wp-content/uploads/2016/03/JuhaSuhonen_Tammerkoski_Tampere.jpg',
  style: {
    diorys: { maxWidth: '60em', margin: '0 auto', alignItems: 'center' },
    text: { textShadow: '1px 1px #366b95' }
  },
  diorys: {
    startDate: {
      text: '1.12.2017',
      style: {
        height: 'initial',
        flex: '0 1 10em'
      }
    },
    endDate: {
      text: '3.12.2017',
      style: {
        height: 'initial',
        flex: '0 1 10em'
      }
    },
    description: {
      text: 'We spent a nice weekend in Tampere. Feeling was very dark. Almost no sun at all.',
      style: {
        height: 'initial',
        flex: '2 1 20em'
      }
    },
    images: {
      diorys: [
        { image: 'https://www.finlandtours.fi/wp-content/uploads/2016/09/Atacan-Ergin-Tammerkoski.jpg' },
        { image: 'http://www.goodnewsfinland.com/wp-content/uploads/2017/10/Frenckell-Square-Tampere-Finland.jpg' },
        { image: 'http://blog.kudoybook.com/wp-content/uploads/images/Tampere_5341.jpg' },
        { image: 'http://kohokohdat.fi/wp-content/uploads/sites/2/2017/10/hotelli-torni-tampere-356x220.jpg' },
        { image: 'https://www.tampere.fi/kuvat/tampere/t/0dEaZOL8l/treiltavalaistuksessa.jpg' },
        { image: 'http://lakecityrally.fi/wp-content/uploads/2015/03/Tampere_landscape.jpg' },
      ],
      style: {
        diorys: {
          flex: '1 1 20em'
        }
      }
    },
    places: {
      image: 'https://www.google.fi/maps/vt/data=TR9-uFm_5rEZpV9q-SwlrFfIFKNMpBWIEPbaJbOgIIuoYU4R9_icKCtCWznNj2ORi-hT33Le1sAH4Wpfcia-KNiOCiMJ1svEbRxG4N6h_4-m3pgi0Pg',
      style: {
        height: '10em',
        flex: '1 1 20em'
      }
    },
    links: {
      diorys: [
        { text: 'Tampere', id: 'https://visittampere.fi/', image: 'https://www.tampere.fi/kuvat/y/vkztdGApB/nasinneulailmakuva17.jpg' },
        { text: 'Särkänniemi', id: 'http://www.sarkanniemi.fi/', image: 'http://www.sarkanniemi.fi/wp-content/uploads/2015/03/angrybirdsland_featured.jpg'},
        { text: 'Pyynikki', id: 'https://en.wikipedia.org/wiki/Pyynikki', image: 'https://visittampere.fi/media/bbe15520-9742-11e4-906f-817e7c88585d.JPG' },
        { text: 'Finlayson', id: 'http://www.finlaysoninalue.fi/', image: 'https://varma.hyperin.com/hyperin-portal/imageserver/banners/845/Finlaysoninalue_header_katu_2000x1000px.jpg' }
      ],
      style: {
        flex: '4 1 40em',
        diorys: {
          height: '5em',
          flex: '1 1 20em'
        }
      }
    },
    persons: {
      diorys: [
        { text: 'Grant', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Grant_Hackett_%2834690236782%29_%28face%29.jpg' },
        { text: 'Miriam', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Miriam_face_black_and_white.jpg' },
        { text: 'Koel', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Koel_Mullick_face.jpg' },
      ],
      style: {
        margin: '0 auto'
      }
    }
  }
}

const EventDioryExample = ({}) => (
  <EventDiory { ...eventDiory } />
)

export default EventDioryExample
