    const app = {
        data() {
            return {
                profilepic: './images/profile.jpg',
                name: 'Nattakron L.',
                account: '@nattakron',
                id: '62130500123',
                status: 'IT25 , KMUTT',
                post: '66',
                followers: '303',
                following: '492',
                url : 'https://www.instagram.com/_sss.silk_/'
            }
        },
    }
    mounteApp = Vue.createApp(app).mount('#app')
    