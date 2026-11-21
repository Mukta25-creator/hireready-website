// Add or edit roadmaps and questions here. Format is plain JavaScript.
const ROADMAPS=[
 {t:"Full Stack Developer",s:["HTML, CSS, JavaScript","Git and GitHub","React or similar framework","Node.js and a database (SQL)","Build and deploy 2 projects"]},
 {t:"Data Analyst",s:["Excel and statistics basics","SQL","Python (pandas)","Power BI or Tableau","Portfolio of 3 analyses"]},
 {t:"AI / ML Engineer",s:["Python and maths basics","Data handling with pandas","Machine learning with scikit-learn","Deep learning basics","1 end-to-end project"]},
 {t:"Cloud Engineer",s:["Linux and networking basics","One cloud (AWS or Azure) fundamentals","Docker and CI/CD","Infrastructure as code","Entry-level cloud certification"]}];
const QUESTIONS={
 "Java":[["What is the difference between JDK, JRE and JVM?","JVM runs bytecode, JRE adds libraries to run programs, JDK adds compiler and tools to build them."],["Difference between == and equals()?","== compares references; equals() compares content when overridden, as in String."],["What is the difference between ArrayList and LinkedList?","ArrayList has fast random access; LinkedList is faster for frequent insert and delete in the middle."]],
 "Python":[["What is the difference between a list and a tuple?","Lists are mutable; tuples are immutable and can be used as dictionary keys."],["What are decorators?","Functions that wrap another function to add behaviour without changing its code."],["What is a generator?","A function using yield that produces values lazily, saving memory."]],
 "SQL":[["Difference between WHERE and HAVING?","WHERE filters rows before grouping; HAVING filters groups after aggregation."],["What is a JOIN? Name the types.","Combines rows from tables on a key: INNER, LEFT, RIGHT, FULL."],["What is normalization?","Organizing tables to reduce duplicate data and update problems."]],
 "Aptitude":[["A train 120 m long crosses a pole in 6 s. What is its speed?","Speed = 120 / 6 = 20 m/s = 72 km/h."],["Cost price 500, selling price 600. Profit %?","(100 / 500) x 100 = 20%."],["Tip","Practise 20 timed questions daily and review mistakes."]]};
