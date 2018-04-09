<template>
  <Song title="Pi song" :tempo="102" :time-signature="[4, 4]">
    <Part :measure="0">
      <Sequence>
        <Note name="c3" value="1/8"></Note>
          <Chord notes="e3 g3" value="1/4"></Chord>
          <Chord notes="e3 g3" value="1/8"></Chord>

        <Note name="c3" value="1/8"></Note>
          <Chord notes="e3 g3" value="1/8"></Chord>

        <Note name="c3" value="1/8"></Note>
          <Chord notes="b2 e3 g3" value="1/8"></Chord>
      </Sequence>
    </Part>
    <Part :measure="1">
      <Sequence>
        <Note name="a2" value="1/8"></Note>
          <Chord notes="c3 e3" value="1/4"></Chord>
          <Chord notes="c3 e3" value="1/8"></Chord>

        <Note name="a2" value="1/8"></Note>
          <Chord notes="c3 e3" value="1/8"></Chord>

        <Note name="a2" value="1/8"></Note>
          <Chord notes="c3 e3" value="1/8"></Chord>
      </Sequence>
    </Part>
    <Part :measure="2">
      <Sequence>
        <Note name="f2" value="1/8"></Note>
          <Chord notes="a2 c3" value="1/4"></Chord>
          <Chord notes="a2 c3" value="1/8"></Chord>

        <Note name="f2" value="1/8"></Note>
          <Chord notes="a2 c3" value="1/8"></Chord>

        <Note name="f2" value="1/8"></Note>
          <Chord notes="f#2 a2 c3" value="1/8"></Chord>
      </Sequence>
    </Part>
    <Part :measure="3">
      <Sequence>
        <Note name="g2" value="1/8"></Note>
          <Chord notes="b2 d3" value="1/4"></Chord>
          <Chord notes="b2 d3" value="1/8"></Chord>

        <Note name="g2" value="1/8"></Note>
          <Chord notes="g2 b2 d3" value="1/8"></Chord>

        <Note name="a2" value="1/8"></Note>
          <Chord notes="b2 d3" value="1/8"></Chord>
      </Sequence>
    </Part>
    <!-- END CHORDS -->
    <!-- Start melody -->
<Part :measure="0">
        <Sequence>

          <Note name="g4" value="2/4" />
<Note name="d4" value="1/4" />
<Note name="a4" value="2/4" />
        </Sequence>
      </Part>

      <Part :measure="1">
        <Sequence>
          <Rest value="0.25" />
          <Note name="d4" value="1/4" />
<Note name="c5" value="1/16" />
<Note name="a5" value="3/4" />
<Note name="e4" value="1/8" />
        </Sequence>
      </Part>

      <Part :measure="2">
        <Sequence>
          <Rest value="0.1875" />
          <Note name="d5" value="1/4" />
<Note name="c5" value="3/4" />
        </Sequence>
      </Part>

      <Part :measure="3">
        <Sequence>

          <Note name="g4" value="1/4" />
<Note name="c5" value="1/16" />
<Note name="g5" value="1/16" />
<Note name="a5" value="1/8" />
<Note name="e5" value="1/16" />
        </Sequence>
      </Part>
    <!-- END MELODY -->
  </Song>
</template>
<script>
import Song from '../components/Song.vue'
import Part from '../components/Part.vue'
import Sequence from '../components/Sequence.vue'
import Note from '../components/Note.vue'
import Chord from '../components/Chord.vue'
import Rest from '../components/Rest.vue'

// https://www.youtube.com/watch?v=HV1-AjwDJwM&list=RDOMq9he-5HUU&index=7
// http://web.mjk-server.de/files/PImprovisation.pdf
// C3 D3   E3 G3   A3 C4   D4 E4   G4 A4
// 0   1    2  3    4  5    6  7    8  9
//  2/4     3/4      1/4    1/8     1/16
export default {
  components: {
    Song,
    Part,
    Sequence,
    Note,
    Rest,
    Chord
  }
}
</script>

<style>

</style>
