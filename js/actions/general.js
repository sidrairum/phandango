export function goToPage(name) {
  return ({ type: 'newPage', name: name });
}

export function layoutChange(col, idx, perc) {
  const type = col ? 'layoutColChange' : 'layoutRowChange';
  return ({ type, idx, perc });
}

export function turnOffCanvas(name) {
  return ({ type: 'turnOffCanvas', name });
}

export function turnOnCanvas(name) {
  return ({ type: 'turnOnCanvas', name });
}

export function toggleMetadataColumn(idx, newValue) {
  return ({ type: 'toggleMetadataColumn', idx, newValue });
}

export function toggleMetaKey() {
  return ({ type: 'toggleMetaKey' });
}
