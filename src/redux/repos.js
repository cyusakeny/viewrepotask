import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const getRepos = createAsyncThunk('repos/getrepos',async()=>{
    return fetch('https://api.github.com/users/cyusakeny/repos').then((res)=>res.json())
})

export const reposSlice = createSlice({
  name: 'repos',
  initialState:{
lists:[],
status:null
  },
 extraReducers:{
     [getRepos.pending]:(state,action)=>{
         state.status='loading'
     },
     [getRepos.fulfilled]:(state,{payload})=>{
        state.status='success'
        state.lists=payload
    },
    [getRepos.rejected]:(state,action)=>{
        state.status='failed'
    },
 }
})

export default reposSlice.reducer;