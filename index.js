
import React from 'react'

import { NativeModules } from 'react-native'

const RNGooglePlacesNative = NativeModules.RNGooglePlaces

class RNGooglePlaces {
	static optionsDefaults = {
		type: '',
		country: '',
		useOverlay: false,
		initialQuery: '',
		locationBias: {
			latitudeSW: 0,
			longitudeSW: 0,
			latitudeNE: 0,
			longitudeNE: 0
		},
		locationRestriction: {
			latitudeSW: 0,
			longitudeSW: 0,
			latitudeNE: 0,
			longitudeNE: 0
		}
	}

	static placeFieldsDefaults = []

	openAutocompleteModal(options = {}, placeFields = []) {
		return RNGooglePlacesNative.openAutocompleteModal({
			...RNGooglePlaces.optionsDefaults,
			...options
		}, [...RNGooglePlaces.placeFieldsDefaults, ...placeFields])
	}

	getAutocompletePredictions(query, options = {}) {
		return RNGooglePlacesNative.getAutocompletePredictions(query, {
            ...RNGooglePlaces.optionsDefaults,
			...options
		})
	}

	lookUpPlaceByID(placeID, placeFields = []) {
	    return RNGooglePlacesNative.lookUpPlaceByID(placeID, [...RNGooglePlaces.placeFieldsDefaults, ...placeFields])
	}

	getCurrentPlace(placeFields = []) {
		return RNGooglePlacesNative.getCurrentPlace([...RNGooglePlaces.placeFieldsDefaults, ...placeFields])
	}

	resetSession() {
		return RNGooglePlacesNative.resetSession();
	}
}

export default new RNGooglePlaces()