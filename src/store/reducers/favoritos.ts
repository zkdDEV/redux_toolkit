import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const objeto = action.payload

      if (state.itens.find((produto) => produto.id === objeto.id)) {
        const indiceDoProduto = state.itens.indexOf(objeto)
        state.itens.splice(indiceDoProduto, 1)
      } else {
        state.itens.push(objeto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
