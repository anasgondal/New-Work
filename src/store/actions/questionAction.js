import axios from 'axios';



export const getSpecialDomain = () => dispatch => {
  return axios
    .get('/api/specialdomain')
    .then((res) => {
      console.log(res)

      return Promise.resolve(res.data)
    }).catch((err) => {
      console.log(err)
      return Promise.reject(err)
    })
  }

  export const getBloomTexonomy = () => dispatch => {
    return axios
      .get('/api/bloomtexonomy')
      .then((res) => {
        console.log(res)

        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
        return Promise.reject(err)
      })
    }

    export const getSpecialSubDomain = (ID) => dispatch => {
      return axios
        .get('/api/specialitysubdomain?Speciality_Domain_ID='+ID)
        .then((res) => {
          console.log(res)
  
          return Promise.resolve(res.data)
        }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
        })
      }

      export const getBasicScienceDomain = () => dispatch => {
        return axios
          .get('/api/basicssciencedomain')
          .then((res) => {
            console.log(res)
    
            return Promise.resolve(res.data)
          }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
          })
        }