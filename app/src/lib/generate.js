export async function sendPayloadToAPI(payload, updatePreview) {
    try {
      const response = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('API response was not ok');
      }
  
      const data = await response.json();
      console.log('Response from backend:', data);
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  