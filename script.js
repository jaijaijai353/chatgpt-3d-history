
fetch('./graph.json')
  .then(res => res.json())
  .then(data => {
    const Graph = ForceGraph3D()(document.getElementById('3d-graph'))
      .graphData(data)
      .nodeAutoColorBy('group')
      .nodeLabel(node => `${node.id}`)
      .linkDirectionalParticles(2)
      .linkDirectionalParticleSpeed(0.005);
  });
