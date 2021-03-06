import { getContext } from 'recompose'

import * as contextTypes from './contextTypes.js'

/**
 * Provides the given component with translator functions
 * as props.
 */
export default function withTranslators(Component) {
  return getContext(contextTypes)(Component)
}
