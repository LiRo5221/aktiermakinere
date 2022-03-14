import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>
      <label for="aktie">Aktie</label>
      <input type="text" id="aktie" name="aktie"></input>
      <button onclick="getakt()">Submit</button>
      <script>
        
      </script>
    </body>

  )
};
