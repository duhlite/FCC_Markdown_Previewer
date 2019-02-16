import { UPDATE_PREVIEW } from "../constants/action-types";

export function updatePreview(payload) {
    return { type: UPDATE_PREVIEW, payload}
};