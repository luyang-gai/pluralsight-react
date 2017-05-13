/**
 * Created by gail on 5/7/17.
 */
const Client = require('node-rest-client').Client;
const client = new Client();

export const GET = function(url) {

  return new Promise((resolve, reject) => {
    client.get(url, (data, response) => {
      resolve(data);
    }).on('error', err => reject(err));
  });
};
