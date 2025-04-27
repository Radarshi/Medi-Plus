
const testTypes = [
  {
    'name' : 'Blood Sugar',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA30saJVY8dOjT7seIguYBTRx9b7S_vBCGg&s'
  },{
    'name' : 'Lipid Profile',
    'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijnDndflj66MoSSb3ur8Ja3NKyHS-quz74w&s'
  },
  {
    name: 'Thyroid Panel',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWQOaCRpGDhYk7UzRML3-vkLiU6jGtP5dhw&s'
  },
  {
    name: 'Liver Function',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n9pvO2MI-m9qPzMzzFJX7R1qw1fZNQI6iQ&s'
  },
  {
    name: 'Kidney Function',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlI5iM5c2PIR97TDqZQuERU6XAa53V6sAMA&s'
  },
  {
    name: 'CBC (Complete Blood Count)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZ8LgPC06TDdgsx7QjA1WGT4-qDUGYFIhFg&s'
  },
  {
    name: 'Vitamin D',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXJBS2b3My9WsZKumSv6HqgXacaeqR4Al5Q&s'
  },
  {
    name: 'Calcium Test',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Tb21aCswTDOEEBybIiM_XQTD7GteJqnC6Q&s'
  },
  {
    name: 'Iron Studies',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvYKcvQ817uTrSd7YB0NSQJuko-_XaNlZw_k1EHic2uFpRSVqlS3D0wU&s'
  },
  {
    name: 'CRP (C-Reactive Protein)',
    image: 'https://l1nk.dev/yRf5A'
  }
]

const Header = () => {
    return(
        <>
        <div className="flex flex-wrap gap-10 p-7">
  {testTypes.map((test,index) =><div class="relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-auto">
    <div class="items-center justify-between p-4 grid grid-flow-col">
      <div class="flex items-center">
        <img
          alt="Loader"
          src={test.image}
          class="relative inline-block h-8 w-8 rounded-full"
        />
        <div class="flex flex-col ml-3 text-sm">
          <span class="text-slate-800 font-semibold">{test.name}</span>
        </div>
      </div>
    </div>
  </div>)}
  </div>
        </>
    )
}

export default Header;