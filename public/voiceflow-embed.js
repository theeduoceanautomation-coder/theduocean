(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    var CalendlyExtension = {
      name: 'CalendlyWidget',
      type: 'response',
      match: function(args) {
        return args.trace.type === 'show_calendly' ||
          (args.trace.payload && args.trace.payload.name === 'show_calendly');
      },
      render: function(args) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(link);

        var container = document.createElement('div');
        container.className = 'calendly-inline-widget';
        container.setAttribute('data-url', 'https://calendly.com/theeduoceanautomation/30min');
        container.style.minWidth = '320px';
        container.style.height = '400px';
        args.element.appendChild(container);

        var script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);

        window.addEventListener('message', function(e) {
          if (e.data.event === 'calendly.event_scheduled') {
            window.voiceflow.chat.interact({
              type: 'text',
              payload: 'I have booked my session!'
            });
          }
        });
      }
    };

    var sessionKey = 'vf_session_id';
    var sessionID = localStorage.getItem(sessionKey);
    if (!sessionID) {
      sessionID = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      localStorage.setItem(sessionKey, sessionID);
    }

    window.voiceflow.chat.load({
      verify: {
        projectID: "6a31070f3ab44152ef049646",
        apiKey: "VF.DM.6a33efb6a7391f99601ecf7e.Rc3JuyuMEbw5P4LI",
        versionID: "main"
      },
      url: "https://general-runtime.voiceflow.com",
      voice: { url: "https://runtime-api.voiceflow.com" },
      userID: sessionID,
      assistant: {
        extensions: [CalendlyExtension]
      }
    });
  };
  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, "script");
