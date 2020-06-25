const { runMigration } = require('contentful-migration');
const path = require('path');

require('dotenv').config();

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_MIGRATION_ACCESSTOKEN,
  environmentId: process.env.CONTENTFUL_ENV,
  yes: true
};

const migrations = async () => {
  try {
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/elementLink.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/subnavCard.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/topNavItem.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/topNavBar.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/localePickerSubmodule.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/globalFooter.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/settingsGlobal.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/standardHero.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/textModule.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/horizontalModule.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/pageGeneral.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/recipeDetail.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/card.js') } });
    await runMigration({ ...options, ...{ filePath: path.join(__dirname, './models/cardList.js') } });
  } catch (err) {
    console.log(err.message);
  }
};

migrations();
