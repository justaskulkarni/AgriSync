import React from 'react'

const FarmerLanding = () => {
    return (
        <>
            <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                        <div class="ui-theme-settings">
                    <button type="button" id="TooltipDemo" class="btn-open-options btn btn-warning">
                        <i class="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
                    </button>
                    <div class="theme-settings__inner">
                        <div class="scrollbar-container">
                            <div class="theme-settings__options-wrapper">
                                <h3 class="themeoptions-heading">Layout Options
                                </h3>
                                <div class="p-3">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left mr-3">
                                                        <div class="switch has-switch switch-container-class" data-class="fixed-header">
                                                            <div class="switch-animate switch-on">
                                                                <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Fixed Header
                                                        </div>
                                                        <div class="widget-subheading">Makes the header top fixed, always visible!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left mr-3">
                                                        <div class="switch has-switch switch-container-class" data-class="fixed-sidebar">
                                                            <div class="switch-animate switch-on">
                                                                <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Fixed Sidebar
                                                        </div>
                                                        <div class="widget-subheading">Makes the sidebar left fixed, always visible!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left mr-3">
                                                        <div class="switch has-switch switch-container-class" data-class="fixed-footer">
                                                            <div class="switch-animate switch-off">
                                                                <input type="checkbox" data-toggle="toggle" data-onstyle="success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-content-left">
                                                        <div class="widget-heading">Fixed Footer
                                                        </div>
                                                        <div class="widget-subheading">Makes the app footer bottom fixed, always visible!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <h3 class="themeoptions-heading">
                                    <div>
                                        Header Options
                                    </div>
                                    <button type="button" class="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class" data-class="">
                                        Restore Default
                                    </button>
                                </h3>
                                <div class="p-3">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <h5 class="pb-2">Choose Color Scheme
                                            </h5>
                                            <div class="theme-settings-swatches">
                                                <div class="swatch-holder bg-primary switch-header-cs-class" data-class="bg-primary header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-secondary switch-header-cs-class" data-class="bg-secondary header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-success switch-header-cs-class" data-class="bg-success header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-info switch-header-cs-class" data-class="bg-info header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-warning switch-header-cs-class" data-class="bg-warning header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-danger switch-header-cs-class" data-class="bg-danger header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-light switch-header-cs-class" data-class="bg-light header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-dark switch-header-cs-class" data-class="bg-dark header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-focus switch-header-cs-class" data-class="bg-focus header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-alternate switch-header-cs-class" data-class="bg-alternate header-text-light">
                                                </div>
                                                <div class="divider">
                                                </div>
                                                <div class="swatch-holder bg-vicious-stance switch-header-cs-class" data-class="bg-vicious-stance header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-midnight-bloom switch-header-cs-class" data-class="bg-midnight-bloom header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-night-sky switch-header-cs-class" data-class="bg-night-sky header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-slick-carbon switch-header-cs-class" data-class="bg-slick-carbon header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-asteroid switch-header-cs-class" data-class="bg-asteroid header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-royal switch-header-cs-class" data-class="bg-royal header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-warm-flame switch-header-cs-class" data-class="bg-warm-flame header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-night-fade switch-header-cs-class" data-class="bg-night-fade header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-sunny-morning switch-header-cs-class" data-class="bg-sunny-morning header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-tempting-azure switch-header-cs-class" data-class="bg-tempting-azure header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-amy-crisp switch-header-cs-class" data-class="bg-amy-crisp header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-heavy-rain switch-header-cs-class" data-class="bg-heavy-rain header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-mean-fruit switch-header-cs-class" data-class="bg-mean-fruit header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-malibu-beach switch-header-cs-class" data-class="bg-malibu-beach header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-deep-blue switch-header-cs-class" data-class="bg-deep-blue header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-ripe-malin switch-header-cs-class" data-class="bg-ripe-malin header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-arielle-smile switch-header-cs-class" data-class="bg-arielle-smile header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-plum-plate switch-header-cs-class" data-class="bg-plum-plate header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-happy-fisher switch-header-cs-class" data-class="bg-happy-fisher header-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-happy-itmeo switch-header-cs-class" data-class="bg-happy-itmeo header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-mixed-hopes switch-header-cs-class" data-class="bg-mixed-hopes header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-strong-bliss switch-header-cs-class" data-class="bg-strong-bliss header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-grow-early switch-header-cs-class" data-class="bg-grow-early header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-love-kiss switch-header-cs-class" data-class="bg-love-kiss header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-premium-dark switch-header-cs-class" data-class="bg-premium-dark header-text-light">
                                                </div>
                                                <div class="swatch-holder bg-happy-green switch-header-cs-class" data-class="bg-happy-green header-text-light">
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <h3 class="themeoptions-heading">
                                    <div>Sidebar Options</div>
                                    <button type="button" class="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class" data-class="">
                                        Restore Default
                                    </button>
                                </h3>
                                <div class="p-3">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <h5 class="pb-2">Choose Color Scheme
                                            </h5>
                                            <div class="theme-settings-swatches">
                                                <div class="swatch-holder bg-primary switch-sidebar-cs-class" data-class="bg-primary sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-secondary switch-sidebar-cs-class" data-class="bg-secondary sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-success switch-sidebar-cs-class" data-class="bg-success sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-info switch-sidebar-cs-class" data-class="bg-info sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-warning switch-sidebar-cs-class" data-class="bg-warning sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-danger switch-sidebar-cs-class" data-class="bg-danger sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-light switch-sidebar-cs-class" data-class="bg-light sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-dark switch-sidebar-cs-class" data-class="bg-dark sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-focus switch-sidebar-cs-class" data-class="bg-focus sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-alternate switch-sidebar-cs-class" data-class="bg-alternate sidebar-text-light">
                                                </div>
                                                <div class="divider">
                                                </div>
                                                <div class="swatch-holder bg-vicious-stance switch-sidebar-cs-class" data-class="bg-vicious-stance sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-midnight-bloom switch-sidebar-cs-class" data-class="bg-midnight-bloom sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-night-sky switch-sidebar-cs-class" data-class="bg-night-sky sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-slick-carbon switch-sidebar-cs-class" data-class="bg-slick-carbon sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-asteroid switch-sidebar-cs-class" data-class="bg-asteroid sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-royal switch-sidebar-cs-class" data-class="bg-royal sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-warm-flame switch-sidebar-cs-class" data-class="bg-warm-flame sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-night-fade switch-sidebar-cs-class" data-class="bg-night-fade sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-sunny-morning switch-sidebar-cs-class" data-class="bg-sunny-morning sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-tempting-azure switch-sidebar-cs-class" data-class="bg-tempting-azure sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-amy-crisp switch-sidebar-cs-class" data-class="bg-amy-crisp sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-heavy-rain switch-sidebar-cs-class" data-class="bg-heavy-rain sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-mean-fruit switch-sidebar-cs-class" data-class="bg-mean-fruit sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-malibu-beach switch-sidebar-cs-class" data-class="bg-malibu-beach sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-deep-blue switch-sidebar-cs-class" data-class="bg-deep-blue sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-ripe-malin switch-sidebar-cs-class" data-class="bg-ripe-malin sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-arielle-smile switch-sidebar-cs-class" data-class="bg-arielle-smile sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-plum-plate switch-sidebar-cs-class" data-class="bg-plum-plate sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-happy-fisher switch-sidebar-cs-class" data-class="bg-happy-fisher sidebar-text-dark">
                                                </div>
                                                <div class="swatch-holder bg-happy-itmeo switch-sidebar-cs-class" data-class="bg-happy-itmeo sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-mixed-hopes switch-sidebar-cs-class" data-class="bg-mixed-hopes sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-strong-bliss switch-sidebar-cs-class" data-class="bg-strong-bliss sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-grow-early switch-sidebar-cs-class" data-class="bg-grow-early sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-love-kiss switch-sidebar-cs-class" data-class="bg-love-kiss sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-premium-dark switch-sidebar-cs-class" data-class="bg-premium-dark sidebar-text-light">
                                                </div>
                                                <div class="swatch-holder bg-happy-green switch-sidebar-cs-class" data-class="bg-happy-green sidebar-text-light">
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <h3 class="themeoptions-heading">
                                    <div>Main Content Options</div>
                                    <button type="button" class="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default
                                    </button>
                                </h3>
                                <div class="p-3">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <h5 class="pb-2">Page Section Tabs
                                            </h5>
                                            <div class="theme-settings-swatches">
                                                <div role="group" class="mt-2 btn-group">
                                                    <button type="button" class="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class" data-class="body-tabs-line">
                                                        Line
                                                    </button>
                                                    <button type="button" class="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class" data-class="body-tabs-shadow">
                                                        Shadow
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        <div class="app-main">
                    <div class="app-sidebar sidebar-shadow">
                        <div class="scrollbar-sidebar">
                            
                        </div>
                    </div>    <div class="app-main__outer">
                        <div class="app-main__inner">
                            <div class="app-page-title">
                                <div class="page-title-wrapper">
                                    <div class="page-title-heading">
                                        <div class="page-title-icon">
                                            <i class="pe-7s-car icon-gradient bg-mean-fruit">
                                            </i>
                                        </div>
                                        <div>Analytics Dashboard
                                            
                                        </div>
                                    </div>
                                        </div>
                            </div>            <div class="row">
                                <div class="col-md-6 col-xl-4">
                                    <div class="card mb-3 widget-content bg-midnight-bloom">
                                        <div class="widget-content-wrapper text-white">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Total Orders</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-white"><span>5</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-4">
                                    <div class="card mb-3 widget-content bg-arielle-smile">
                                        <div class="widget-content-wrapper text-white">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Total Sale</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-white"><span>Rs 568</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-4">
                                    <div class="card mb-3 widget-content bg-grow-early">
                                        <div class="widget-content-wrapper text-white">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Profit</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-white"><span>46%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                                    <div class="card mb-3 widget-content bg-premium-dark">
                                        <div class="widget-content-wrapper text-white">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Profit</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-warning"><span>$14M</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-card mb-3 card">
                                        <div class="card-header">Your Requests
                                            <div class="btn-actions-pane-right">
                                                <div role="group" class="btn-group-sm btn-group">
                                                    <button class="active btn btn-focus">Last Week</button>
                                                    <button class="btn btn-focus">All Month</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center">#</th>
                                                        <th>Item</th>
                                                        <th class="text-center">Quantity</th>
                                                        <th class="text-center">Status</th>
                                                        <th class="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center text-muted">#345</td>
                                                        <td>
                                                            <div class="widget-content p-0">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-left mr-3">
                                                                        <div class="widget-content-left">
                                                                            <img width="40" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="widget-content-left flex2">
                                                                        <div class="widget-heading">Tomato</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">5kg</td>
                                                        <td class="text-center">
                                                            <div class="badge badge-warning">Pending</div>
                                                        </td>
                                                        <td class="text-center">
                                                            <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center text-muted">#347</td>
                                                        <td>
                                                            <div class="widget-content p-0">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-left mr-3">
                                                                        <div class="widget-content-left">
                                                                            <img width="40" class="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="widget-content-left flex2">
                                                                        <div class="widget-heading">Potato</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">10kg</td>
                                                        <td class="text-center">
                                                            <div class="badge badge-success">Completed</div>
                                                        </td>
                                                        <td class="text-center">
                                                            <button type="button" id="PopoverCustomT-2" class="btn btn-primary btn-sm">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center text-muted">#321</td>
                                                        <td>
                                                            <div class="widget-content p-0">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-left mr-3">
                                                                        <div class="widget-content-left">
                                                                            <img width="40" class="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="widget-content-left flex2">
                                                                        <div class="widget-heading">Onion</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">7kg</td>
                                                        <td class="text-center">
                                                            <div class="badge badge-danger">In Progress</div>
                                                        </td>
                                                        <td class="text-center">
                                                            <button type="button" id="PopoverCustomT-3" class="btn btn-primary btn-sm">Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center text-muted">#55</td>
                                                        <td>
                                                            <div class="widget-content p-0">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-left mr-3">
                                                                        <div class="widget-content-left">
                                                                            <img width="40" class="rounded-circle" src="assets/images/avatars/1.jpg" alt="" /></div>
                                                                    </div>
                                                                    <div class="widget-content-left flex2">
                                                                        <div class="widget-heading">Ginger</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">2kg</td>
                                                        <td class="text-center">
                                                            <div class="badge badge-info">On Hold</div>
                                                        </td>
                                                        <td class="text-center">
                                                            <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="d-block text-center card-footer">
                                            <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                                            <button class="btn-wide btn btn-success">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                    
                </div>
            </div>
    

        </>
    )
}

export default FarmerLanding