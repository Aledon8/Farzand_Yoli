import axios from 'axios';

const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY';

export const getPlaceDetails = async (placeId) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
            params: {
                placeid: placeId,
                key: GOOGLE_API_KEY
            }
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching place details:', error);
        throw error;
    }
};

export const searchPlaces = async (query, location, radius) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json`, {
            params: {
                query,
                location,
                radius,
                key: GOOGLE_API_KEY
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error searching places:', error);
        throw error;
    }
};
