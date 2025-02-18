const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
exports.REMOTE_DISTRO_URL = 'http://fastdl.terrymarquis.fr:82/orizon/orizon.json'
// exports.REMOTE_DISTRO_URL = 'http://158.178.197.251:8080/shioh.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api